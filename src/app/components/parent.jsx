export const parent = (children) => {
  return (
    <div>
      <div className="header"></div>
      <div>{children}</div>
    </div>
  );
};
