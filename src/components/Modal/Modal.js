import { FaWindowClose } from "react-icons/fa"
import './Modal.css'
const Modal = ({candidate, report, setOpenModal}) => {

    const doi = report.interviewDate;
    const doiDate = new Date(doi);
    const doiDay = doiDate.getDate().toString().padStart(2, '0');
    const doiMonth = (doiDate.getMonth() + 1).toString().padStart(2, '0');
    const doiYear = doiDate.getFullYear();
    const formattedDoi = `${doiDay}.${doiMonth}.${doiYear}`;
    console.log(report);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="row title">
               
                    <h4>{candidate.name}</h4>
                  <div className="closeBtn">
                    <FaWindowClose onClick={()=> {setOpenModal(false)}} id="button"/> 
                  </div>
                    
           
                </div>
                <div className="row">
                <div className="body">
                    <div className="info col s4">
                        <h6 className="gray-info">Company</h6>
                        <h6 className="gray-data">{report.companyName}</h6>
                        <h6 className="gray-info">Interview Date</h6>
                        <h6 className="gray-data">{formattedDoi}</h6>
                        <h6 className="gray-info">Phase</h6>
                        <h6 className="gray-data"> {report.phase}</h6>
                        <h6 className="gray-info">Status</h6>
                        <h6 className="gray-data"> {report.status}</h6>
                    </div>
                    <div className="notes col s8">
                        
                        <h6 className="gray-info">
                            Notes
                        </h6>
                        
                        <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan sodales turpis sed maximus. Aenean bibendum arcu in enim lacinia posuere. Aliquam sodales, massa ut luctus pulvinar, odio leo pretium nisl, vitae pharetra nisi urna nec tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tristique pellentesque est, in hendrerit dolor finibus a. Sed consequat pulvinar lectus ut feugiat. Curabitur vel erat vel dui convallis volutpat.
                        </p>
                        
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Modal