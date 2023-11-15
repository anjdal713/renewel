import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css'
import { IoCalendarNumber } from "react-icons/io5";

const CustomDatePicker = (props) => {
    const CustomInput = forwardRef((props, ref) => (
    <button className="datepicker-input" onClick={props.onClick} ref={ref}>
        {props.value}
        <IoCalendarNumber className="calendar-icon" />
    </button>
));

    return (
    <div>
        <DatePicker
        locale={ko}
        selected={props.selectedDate}
        onChange={props.setSelectedDate}
        dateFormat="yyyy년 MM월 dd일"
        customInput={<CustomInput />}
        showPopperArrow={false}
        />
    </div>
    );
};

export default CustomDatePicker;