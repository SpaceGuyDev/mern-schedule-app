import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../';
import { customSelectModalStyles } from '../../constance/localData';
import { toast } from 'react-toastify';
import { createInvite } from '../../features/invite/inviteSlice';

const InviteUser = ({company}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        if(email && company) {
            dispatch(createInvite({
                receiver: email,
                company: company._id,
                to: 'user'
            }));
            setIsModalOpen(false);
        } else {
            toast.error('Please fill all fields');
        }
    };

    return (
        <>
        <Modal
            setModalIsOpen={setIsModalOpen}
            modalIsOpen={isModalOpen}
            actionBtnText="Invite"
            contentLabel={`Invite to ${company.name}`}
            onSubmit={onSubmit}
        >
            <div className="employee-form">
                <div className="form-group-row">
                    <div className="form-group">
                        <label>Email *</label>
                        <input 
                            type="email" 
                            name="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter user's email" />
                    </div>
                </div>
            </div>
        </Modal>
        <section className="btn btn-outline-primary mt-1" onClick={() => { setIsModalOpen(true) }}>
            <div className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
            </div>
            <p>Invite User</p>
        </section>
        </>
    )
}

export default InviteUser