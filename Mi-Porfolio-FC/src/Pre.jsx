function Pre({ load }) {
  return (
    <div id="preloader" className={load ? "preloader-active" : "preloader-none"}>
    </div>
  );
}

export default Pre;