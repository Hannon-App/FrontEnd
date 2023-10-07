import LayoutUser from "../../../../components/User/LayoutUser";
import InputSearch from "../../../../components/User/InputSearch";
import Card from "../../../../components/User/Card";
import { useEffect, useState } from "react";
import Button from "../../../../components/User/Bottom";
import axios from "axios";
import Cookie from "js-cookie";
import { useParams } from "react-router-dom";

const Item = () => {
  //
  const [data, setData] = useState<any[]>([]);
  const { id } = useParams<{ id: string }>();
  const token = Cookie.get("token");
  const getData = () => {
    axios
      .get(`https://hannonapp.site/tenant/${id}/items`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data[0]?.items || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <section>
      <LayoutUser>
        <div className="flex bg-white "></div>
        <div className="flex flex-col items-end  ">
          <InputSearch placeholder={""} />
        </div>
        <div className="flex flex-col bg-white  px-11 mt-11 items-center justify-center rounded">
          <div className="">
            <div className="flex justify-between ">
              <p className=" font-semibold text-2xl my-11 ml-4">Package</p>
              <Button
                label="View All"
                classname="flex bg-gray-300 my-11 px-5 py-2 rounded items-end"
                
              />
            </div>

            <div className="h-max mx-5 grid grid-cols-4 gap-x-5 gap-y-5  my-14">
              {data &&
                data?.map((item: any) => {
                  return (
                    <Card
                      key={item.ID}
                      id={item?.ID}
                      title={item?.name}
                      image={item?.Image}
                      price={item?.Rent_Price}
                      category={item?.Description_Item}
                    />
                  );
                })}
            </div>
            <p className="font-semibold text-2xl my-11 ml-4">Item</p>
            <div className="h-max mx-5 grid grid-cols-4 gap-x-5 gap-y-5  my-14">
              {data &&
                data?.map((item: any, index: any) => {
                  return (
                    <Card
                      key={index}
                      id={item?.ID}
                      title={item?.name}
                      image={item?.Image}
                      price={item?.Rent_Price}
                      category={item?.Description_Item}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        {/* </div> */}
      </LayoutUser>
    </section>
  );
};

export default Item;
