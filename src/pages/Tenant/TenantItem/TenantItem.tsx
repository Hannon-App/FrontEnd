import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

interface Item {
    ID: number;
    Name: string;
    Stock: number;
    Description_Item: string;
}

const TenantItem = () => {
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    // const tempData: any = Cookies.get("data");
    // const data = JSON.parse(tempData);
    // const token = data.data.token;
    axios
      .get(`/tenant/5/items`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6NSwiYXV0aG9yaXplZCI6dHJ1ZSwiZXhwIjoxNjk2NTk0ODUyLCJ0ZW5hbnQiOjUsInVzZXJJZCI6NX0.dDiblbtdLf2NzNECQCXmkZ1mmV-8PDNE8N6XguxuajY`,
        },
      })
      .then((response) => {
        console.log(response.data.data[0].items);

        setItemList(response.data.data[0].items);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-10 h-full">
      <div className="w-full">
        <div>
          <h1 className="font-semibold text-2xl">List Item</h1>
        </div>
        <div className="py-10 flex flex-wrap justify-end">
          <div>
            <Button textBtn="Add Item" color="bg-bgBtn" />
          </div>
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
              {itemList &&
                itemList.map((item, index) => (
                  <tr className="bg-white border-b hover:bg-gray-300">
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      {item.Name}
                    </td>
                    <td className="px-6 py-4">{item.Stock}</td>
                    <td className="px-6 py-4">{item.Description_Item}</td>
                    <td className="px-6 py-4 flex gap-5">
                      <div className="text-green-800 cursor-pointer">
                        <FontAwesomeIcon icon={faPenToSquare} size="xl" />
                      </div>
                      <div className="text-red-800 cursor-pointer">
                        <FontAwesomeIcon icon={faTrash} size="xl" />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TenantItem;
