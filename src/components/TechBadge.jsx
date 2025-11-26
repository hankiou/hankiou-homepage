const CDN = "https://cdn.simpleicons.org/";

export const TechBadge = ({ className, tech, icon, ...props }) => {
  return (
    <span title={tech} className={`${className} tag`} {...props}>
      <img src={`${CDN}${tech}`} width="16px" />
      {!icon && tech}
    </span>
  );
};
