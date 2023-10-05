const TenantArchive = () => {
  return (
    <div className="p-10 h-full">
      <div className="w-full pb-10">
        <div>
          <h1 className="font-semibold text-2xl">List Archive</h1>
        </div>
      </div>
      <div className="py-2 px-12 w-full bg-white rounded">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left  font-semibold">
            <thead className="text-md uppercase border-b-2">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Stocks
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="bg-white border-b hover:bg-gray-300">
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  Bag
                </td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">Bag</td>
                <td className="px-6 py-4 flex gap-5">
                  <div className="text-green-800 cursor-pointer">
                    Unarchive
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TenantArchive