import Button from "../../../components/Button";
import React from "react";

type Props = {};

const TenantRented = (props: Props) => {
  return (
    <div className="p-10 h-full">
      <div className="w-full pb-10">
        <div>
          <h1 className="font-semibold text-2xl">List Rented</h1>
        </div>
      </div>
      <div className="py-2 px-12 w-full bg-white rounded">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left  font-semibold">
            <thead className="text-md uppercase border-b-2">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3">
                  Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
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
                <td className="px-6 py-4">
                  <span className="inline-flex font-semibold items-center bg-green-100 text-green-800 text-sm mr-2 px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                    Pending Approve
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-5">
                  <div>
                    <Button textBtn="Approve" color="bg-green-600" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TenantRented;
