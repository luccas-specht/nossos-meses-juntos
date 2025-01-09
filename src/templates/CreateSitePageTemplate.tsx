'use client';

import { useState } from 'react';
import Image from 'next/image';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from './styles.module.css';

export const CreateSitePageTemplate = () => {
  const [plan, setPlan] = useState('much');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) setPlan(newAlignment);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <section className="w-[530px] mb-10">
        <h1 className="text-6xl font-bold mb-4">Quase lá!</h1>
        <div className="text-lg">
          Preencha os campos abaixo para criar seu site personalizado e reviver
          cada momento especial desses meses vividos juntos&nbsp;
          <span className="inline-block align-middle">
            <Image
              src="/assets/icons/loving.svg"
              alt="Loving"
              width={18}
              height={18}
            />
          </span>
        </div>
      </section>
      <section>
        <label
          htmlFor="to-select-plan"
          className="text-base font-semibold text-gray-primary"
        >
          Plano selecionado
        </label>
        <ToggleButtonGroup
          id="to-select-plan"
          exclusive
          value={plan}
          onChange={handleChange}
          aria-label="Plan selection"
          className="flex rounded w-full mt-2"
        >
          <ToggleButton
            value="much"
            selected={plan === 'much'}
            className="px-4 py-2 w-[160px]"
            classes={{
              root: styles.toggleButtonRoot,
              selected: styles.toggleButtonSelected,
            }}
          >
            Muito Amor&nbsp;
            <Image
              src="/assets/icons/loving-with-eyes.svg"
              alt="Loving"
              width={18}
              height={18}
            />
          </ToggleButton>

          <ToggleButton
            value="lower"
            selected={plan === 'lower'}
            className="px-4 py-2 w-[160px]"
            classes={{
              root: styles.toggleButtonRoot,
              selected: styles.toggleButtonSelected,
            }}
          >
            Pouco Amor&nbsp;
            <Image
              src="/assets/icons/sadness.svg"
              alt="Sadness"
              width={18}
              height={18}
            />
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
    </div>
  );
};
