import "./index.css";
import ResultItem from "../ResultItem";
import useStore from "../../store";

export default function Result() {
  const {arrayData, defaultData} = useStore();

  const filterData = arrayData.filter((data) => defaultData.price <= data.condition.summ && defaultData.term <= data.condition.term && data.visible);

  return (
    <div className="result">
      {
        filterData.map(data => {
          return <ResultItem key={data.id} data={{...data}}/>
        })
      }
    </div>
  );
}
