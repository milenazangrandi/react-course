import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins could not be loaded");
  return data;
}

export async function deleteCabin(id) {
  console.log(id);
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabins could not be deleted");

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(newCabin, id, hasImagePath);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1. select the table
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) throw new Error("Cabin could not be created.");

  //2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  console.log(storageError);
  //3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Image could not be uploaded and the cabin was not created."
    );
  }

  return data;
}
