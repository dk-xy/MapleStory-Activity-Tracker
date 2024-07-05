// src/components/Legion/AddCharacterModal.jsx
import React from 'react';
import './OverlayModal.css'; // Import the CSS for styling
// import './AddCharacterModal.css'; // Import the CSS for styling
import { IconX } from '@tabler/icons-react';

const OverlayModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className='modalWrapper'>
                <div className="modalClose" onClick={onClose}>
                    <IconX size={24} color='#fcfcfc'/>
                </div>
                <div className="modalContent" onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>


        </div>
    );
};

export default OverlayModal;