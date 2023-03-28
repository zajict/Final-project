import { FaWindowClose } from "react-icons/fa"
import './Modal.css'
const Modal = ({candidate, report, setOpenModal}) => {

    const doi = report.interviewDate;
    const doiDate = new Date(doi);
    const doiDay = doiDate.getDate().toString().padStart(2, '0');
    const doiMonth = (doiDate.getMonth() + 1).toString().padStart(2, '0');
    const doiYear = doiDate.getFullYear();
    const formattedDoi = `${doiDay}.${doiMonth}.${doiYear}`;

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
                    <div className="info col l4 s12">
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info ">Company</h6>
                        <h6 className="gray-data">{report.companyName}</h6>
                        </div>
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info">Interview Date</h6>
                        <h6 className="gray-data">{formattedDoi}</h6>
                        </div>
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info">Phase</h6>
                        <h6 className="gray-data"> {report.phase}</h6>
                        </div>
                        <div className="col l12 m6 s12">
                        <h6 className="gray-info">Status</h6>
                        <h6 className="gray-data"> {report.status}</h6>
                            </div>
                        
                    </div>
                    <div className="notes col l8 s12">
                        <h6 className="gray-info">
                            Notes
                        </h6>
                        <div className="text-container">
                        <p className="text" id="text-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan sodales turpis sed maximus. Aenean bibendum arcu in enim lacinia posuere. Aliquam sodales, massa ut luctus pulvinar, odio leo pretium nisl, vitae pharetra nisi urna nec tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tristique pellentesque est, in hendrerit dolor finibus a. Sed consequat pulvinar lectus ut feugiat. Curabitur vel erat vel dui convallis volutpat.
                        </p>
                        </div>
                        
                        
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Modal