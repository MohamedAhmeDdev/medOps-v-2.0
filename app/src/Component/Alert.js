import Swal from 'sweetalert2';
import sound from '../assets/mp3/1561356180_7689335a082e02b.mp3';
import alertImage from '../assets/img/Red_triangle_alert_icon.png';

const playErrorSound = () => {
  const audio = new Audio(`${sound}`);
  audio.play();
};


export const showAlert = (message) => {
  playErrorSound();
  Swal.fire({
    // icon: 'error',
    title: 'Alert',
    text: message,
    width: '450px',
    imageUrl: `${alertImage}`,
    imageAlt: 'Custom Icon',
    imageHeight: '100px',
    imageWidth: '100px', 
    showCloseButton: true, 
    showConfirmButton: false, 
    customClass: {
      container: 'p-4 rounded-lg shadow-lg bg-red-600 text-white',
    },
  });
};

export const showError = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'An error has occurred',
    text: message,
    width: '450px',
  });
};

export const showSuccess = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
     width: '450px',
  });
};
