
const PreviousWork = ({ previousWork }: { previousWork: any }) => {
  return (
    <div className="my-10">
      <h1 className="font-bold text-xl mb-5">Previous Works</h1>
      <div className="grid grid-cols-3 gap-3">
        {previousWork.map((work: any) => (
          <img src={work?.url} alt="" className="w-60 h-60 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

export default PreviousWork