import LayoutUser from "../../../../components/User/LayoutUser";
import InputSearch from "../../../../components/User/InputSearch";
import CardUser from "../../../../components/User/CardUser";
import { useEffect, useState } from "react";
import Button from "../../../../components/User/Bottom";
import axios from "axios";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [data, setData] = useState<any[]>([]);

  const token = Cookie.get("token");
  const getData = () => {
    axios
      .get(`https://hannonapp.site/tenant`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
              <p className=" font-semibold text-2xl my-11">Pilih tempat</p>
              <Button
                label="View All"
                classname="flex bg-gray-300 my-11 px-5 py-2 rounded items-end"
              />
            </div>

            <div className="h-max grid grid-col justify-center gap-x-5 gap-y-5 my-14">
              {data.map((item) => (
                <Link to={`/item-user/${item.id}`} key={item.id}>
                  <CardUser
                    key={item.id}
                    title={item.name}
                    width="1100px"
                    height="200px"
                    storeName={item.name}
                    storeAddress={item.address}
                    storeDeskripsi={item.phone}
                    storeImage={item.images}
                  >
                    <p>Deskripsi toko atau konten tambahan lainnya.</p>
                  </CardUser>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </LayoutUser>
    </section>
  );
};

export default UserDashboard;
