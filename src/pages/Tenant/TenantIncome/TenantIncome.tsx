import Card from "../../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineChart from "../../../components/LineChart";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const TenantIncome = () => {
  const customItem = () => {
    return (
      <div className="flex justify-center items-center h-40 bg-white px-10">
        <h1 className="text-3xl pr-2">RP. 100.000.000,00</h1>
        <div className="text-green-600">
          <FontAwesomeIcon icon={faChevronUp} size="xl" />
        </div>
      </div>
    );
  };
  return (
    <div className="p-10 h-full">
      <div className="py-4 px-12 w-full h-100 bg-white rounded">
        <LineChart />
      </div>

      <div className="my-6 py-12 px-12 w-full flex flex-wrap gap-12 justify-center">
        <Card
          title="Total Income"
          text="10"
          color="bg-bgBtn"
          custom={true}
          customItem={customItem}
          width="w-2/5"
        />
        <Card
          title="Current Income"
          text="5"
          color="bg-bgBtn"
          custom={true}
          customItem={customItem}
          width="w-2/5"
        />
        <Card
          title="Last Month Income"
          text="5"
          color="bg-bgBtn"
          custom={true}
          customItem={customItem}
          width="w-2/5"
        />
        <Card
          title="Last 6 Month Income"
          text="3"
          color="bg-bgBtn"
          custom={true}
          customItem={customItem}
          width="w-2/5"
        />
      </div>
    </div>
  );
};

export default TenantIncome;
