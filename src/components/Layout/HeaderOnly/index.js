import Header from '~/components/layout/components/Header';
function HeaderOnely({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnely;
