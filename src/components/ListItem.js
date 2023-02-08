const ListItem = ({href, src, alt}) => {
    return (
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={href}
        >
          <img
            src={src}
            alt={alt}
          />
        </a>
      </li>
    );
  };
  
  export default ListItem;
  