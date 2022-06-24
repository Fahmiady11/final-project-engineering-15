import React, { useState, useEffect } from 'react';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/solid';
function CheckedCard() {
  let fakeApi = {
    Checked: false,
  };
  const [Checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(fakeApi.Checked);
  }, [fakeApi.Checked]);

  const handleChecked = () => {
    if (Checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  return (
    <>
      <div className="flex items-center gap-1">
        {Checked ? (
          <CheckCircleIconSolid
            className="h-7 w-7 text-teal-700 cursor-pointer"
            onClick={handleChecked}
          />
        ) : (
          <CheckCircleIconSolid
            className="h-7 w-7 text-gray-400 cursor-pointer"
            onClick={handleChecked}
          />
        )}
      </div>
    </>
  );
}

export default CheckedCard;
