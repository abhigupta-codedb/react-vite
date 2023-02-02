import './Wheel.scss';

const Wheel = () => {
   let rotation = 0;

   return (
      <div className="wheel-motor">
         <div className="wheel">
            <div className="product product1">Product 1</div>
            <div className="product product2">Product 2</div>
            <div className="product product3">Product 3</div>
            <div className="product product4">Product 4</div>
         </div>
         <button
            id="rotate-button"
            onClick={() => {
               rotation += 60;
               const wheel = document.querySelector<HTMLElement>('.wheel');
               if (wheel) {
                  wheel.style.transform = `rotate(${rotation}deg)`;
               }
            }}
         >
            Rotate
         </button>
      </div>
   );
};

export default Wheel;
