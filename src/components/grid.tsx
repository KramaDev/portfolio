type Props = {
  photos: string[];
};

const Grid = ({ photos }: Props) => {
  return (
    <div id="gallery" className="grid">
      {photos.map((photo, index) => (
        <img
          className="grid__item"
          key={index}
          src={photo}
          alt={`Photo ${index}`}
        />
      ))}
    </div>
  );
};

export default Grid;
