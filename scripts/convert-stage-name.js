export const convertStageName = (stage) => {
  console.log(stage.toUpperCase().replace("-", "_"))
  return stage.toUpperCase().replace("-", "_")
}