import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-3 row-span-2">
          <img src="https://images.unsplash.com/photo-1554254464-7046778097bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNydWlzZXxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGl8ZW58MHx8MHx8fDI%3D" alt="/" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1521071379542-3b741db9f90b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9yYSUyMGJvcmF8ZW58MHx8MHx8fDI%3D" alt="/" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1659559108726-4855a7e293a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hbGRpdmVzfGVufDB8fDB8fHwy" alt="/" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1572869357118-65e4f7a59813?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDI%3D" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
