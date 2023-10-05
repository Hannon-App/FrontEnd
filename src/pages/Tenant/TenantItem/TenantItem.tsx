import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Button from "../../../components/Button";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "../../../components/Popup";
import Swal from "sweetalert2";
import axios from "axios";

interface Item {
  id: number;
  name: string;
  stock: number;
  description_item: string;
  image: string;
  broke_cost: number;
  lost_cost: number;
  rent_price: number;
}

interface ItemData {
  id: number | null;
  name: string;
  stock: number | string;
  rentPrice: number | string;
  image: string | null;
  descriptionItem: string;
  brokeCost: number | string;
  lostCost: number | string;
  isEdit: boolean;
}

const TenantItem = () => {
  const token = Cookies.get("token");
  const [itemList, setItemList] = useState<Item[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [newItemData, setNewItemData] = useState<ItemData>({
    id: null,
    name: "",
    stock: "",
    rentPrice: "",
    image: null,
    descriptionItem: "",
    brokeCost: "",
    lostCost: "",
    isEdit: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [next, setNext] = useState(false);

  useEffect(() => {
    getItem();
  }, [currentPage]);

  const getItem = () => {
    axios
      .get(`/items?page=${currentPage}&itemPerPage=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setItemList(response.data.data);
        setNext(response.data.next);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `Something went wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  };

  const handleOpen = () => {
    setOpen(true);

    resetNewItemData();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItemData({
      ...newItemData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newItemData.name);
    formData.append("stock", String(newItemData.stock));
    formData.append("rent_price", String(newItemData.rentPrice));
    formData.append("description_item", newItemData.descriptionItem);
    formData.append("broke_cost", String(newItemData.brokeCost));
    formData.append("lost_cost", String(newItemData.lostCost));
    if (newItemData.image) {
      formData.append("image", newItemData.image);
    }

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const apiUrl = newItemData.isEdit ? `/items/${newItemData.id}` : "/items";

    axios
      .request({
        method: newItemData.isEdit ? "PUT" : "POST",
        url: apiUrl,
        data: formData,
        ...axiosConfig,
      })
      .then(() => {
        resetNewItemData();
        getItem();
        handleClose();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `Something went wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        getItem();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `Something went wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  };

  const resetNewItemData = () => {
    setNewItemData({
      id: null,
      name: "",
      stock: "",
      rentPrice: "",
      image: null,
      descriptionItem: "",
      brokeCost: "",
      lostCost: "",
      isEdit: false,
    });
  };

  const nextPage = () => {
    if (next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-10 h-full">
      <div className="w-full">
        <div>
          <h1 className="font-semibold text-2xl">List Item</h1>
        </div>
        <div className="py-10 flex flex-wrap justify-end">
          <div>
            <Button textBtn="Add Item" color="bg-bgBtn" onClick={handleOpen} />
          </div>
        </div>
      </div>
      <div className="pt-12 pb-6 px-12 w-full bg-white rounded">
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
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-bgBtn/40"
                    } border-b ${
                      index % 2 === 0
                        ? "hover:bg-gray-300"
                        : "hover:bg-bgBtn/50"
                    }`}
                  >
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">{item.stock}</td>
                    <td className="px-6 py-4">{item.description_item}</td>
                    <td className="px-6 py-4 flex gap-5">
                      <div
                        className="text-green-800 cursor-pointer"
                        onClick={() => {
                          setNewItemData({
                            id: item.id,
                            name: item.name,
                            stock: item.stock,
                            rentPrice: item.rent_price,
                            image: item.image,
                            descriptionItem: item.description_item,
                            brokeCost: item.broke_cost,
                            lostCost: item.lost_cost,
                            isEdit: true,
                          });

                          setOpen(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} size="xl" />
                      </div>
                      <div
                        className="text-red-800 cursor-pointer"
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleDelete(item?.id);
                            }
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} size="xl" />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end space-x-4 m-3 pt-6">
          <button
            onClick={prevPage}
            className={`outline outline-bgBtn py-2 w-32 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center  ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className={`outline outline-bgBtn py-2 w-32 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-bgBtn rounded-btn flex justify-center items-center  ${
              !next ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {open && (
        <Popup onConfirm={handleClose}>
          <div className="relative w-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-black">Add Item</h3>
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newItemData.name}
                      onChange={handleInputChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-96 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Description Item
                    </label>
                    <input
                      type="text"
                      name="descriptionItem"
                      value={newItemData.descriptionItem}
                      onChange={handleInputChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-96 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Stock
                    </label>
                    <input
                      type="number"
                      name="stock"
                      value={newItemData.stock}
                      onChange={handleInputChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-96 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Rent Price
                    </label>
                    <input
                      type="number"
                      name="rentPrice"
                      value={newItemData.rentPrice}
                      onChange={handleInputChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-96 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e: any) => {
                        const { files, name } = e.target;
                        const file = files[0];
                        setNewItemData({
                          ...newItemData,
                          [name]: file,
                        });
                      }}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-96 p-2.5"
                      required={newItemData.isEdit ? false : true}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Broke Cost
                    </label>
                    <input
                      type="number"
                      name="brokeCost"
                      value={newItemData.brokeCost}
                      onChange={handleInputChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-96 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Lost Cost
                    </label>
                    <input
                      type="number"
                      name="lostCost"
                      value={newItemData.lostCost}
                      onChange={handleInputChange}
                      className=" border border-gray-300 text-black text-sm rounded-sm  block w-96 p-2.5"
                      required
                    />
                  </div>
                  <div className="flex gap-2 py-2 justify-end">
                    <button
                      type="button"
                      onClick={() => handleClose()}
                      className=" text-white bg-bgBtnRed rounded-cardBase font-semibold text-sm px-5 py-2.5 text-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className=" text-white bg-bgBtn font-semibold rounded-cardBase text-sm px-8 py-2.5 text-center"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default TenantItem;
