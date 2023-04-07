
const Repo = async ({name}) => {
    const repo = await fetchRepo(name)
  return (
    <div>Repo</div>
  )
}

export default Repo