import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import { FETCH_ALL_TREATMENTS } from "../../redux/treatmentsSlice";

const Content = () => {
  
  const treatment = useSelector((state) => state.treatments);
  const dispatch = useDispatch();

  dispatch(FETCH_ALL_TREATMENTS(treatment));
  console.log('ocitani tretmani', treatment)
  

  return (
    <div className="main-content">
      </div>
  )
}

export default Content;
