import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modalContainer}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  modalContainer: {
    position: 'fixed',
    top: 0, left: 0, width: '100vw', height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    background: 'transparent', // no dark overlay
  },
  modal: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    minWidth: '400px',
    maxWidth: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    position: 'relative',
    zIndex: 1001,
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  }
};

export default Modal;
