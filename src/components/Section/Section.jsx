export const Section = ({ title, children }) => (
  <div>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);
