const MenuItem = (Props) => {
  return (
    <div className="menu-item">
      <a>{Props.name}</a>
    </div>
  );
};

export default MenuItem;
