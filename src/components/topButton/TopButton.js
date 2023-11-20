import { FaArrowAltCircleUp } from "react-icons/fa";
import './TopButton.css';

export default function TopButton() {

const handleScroll = () => {
    if (!window.scrollY) return

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

    return (
        <div class="topBtn_wrap">
            <button class="topBtn" onClick={handleScroll}>
            <FaArrowAltCircleUp />
            </button>
        </div>
    )
}