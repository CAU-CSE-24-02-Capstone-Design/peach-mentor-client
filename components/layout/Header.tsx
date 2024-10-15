import React from 'react';

const Header = () => {
  return (
    <header className="container absolute mx-auto flex max-w-[450px] items-center justify-between bg-primary-50 px-4 py-2">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-white">복숭아멘토</h1>
      </div>
      {/* 마이페이지  */}
      <button className="text-lg">마이페이지</button>
    </header>
  );
};

export default Header;
