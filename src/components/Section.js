const Section = ({ title, subtitle, children }) => {
    return (
      <section>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <ul className="games-list">
              {children}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Section;
  