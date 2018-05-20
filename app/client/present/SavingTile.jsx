import React from 'react';

const style = {
  // border: "1px solid black",
  height: "260px",
  width: "260px",
}

const picStyle = {
  height: "90px",
  width: "90px",
  display: "block",
  margin: " 0 auto",
}
const SavingTile = () => {
  return (
    <div style={style} className="SaveContainer">
        <img style={picStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFlcLfCSwOEcwga43eSpVo0_DZYlT_4dd0NcNHstdaSGMxyXG" />

      <div style={{paddingTop: "10px"}}>
        <form>
          <label>
            Add:
            <input type="text" name="add" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SavingTile;