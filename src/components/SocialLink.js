const SocialLink = ({ itemClass, href, id, icon }) => {
  return (
    <li key={id}>
      <a rel="noreferrer" href={href} target="_blank" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
