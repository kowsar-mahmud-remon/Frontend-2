import JustForYou from "../../components/GeneralShopping/JustForYou";
import NewArrival from "../../components/GeneralShopping/NewArrival";
import TopSection from '../../components/GeneralShopping/TopSection';
import PersonalProtectiveEquipment from "../../components/GeneralShopping/PersonalProtectiveEquipment";
import MarchExpo from "../../components/GeneralShopping/MarchExpo";

function generalShopping() {
    return (
        <div>
            <TopSection />
            <MarchExpo></MarchExpo>
            <NewArrival></NewArrival>
            <PersonalProtectiveEquipment></PersonalProtectiveEquipment>
            <JustForYou></JustForYou>

        </div>

    );
}
export default generalShopping;
