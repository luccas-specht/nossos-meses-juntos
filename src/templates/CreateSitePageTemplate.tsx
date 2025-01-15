'use client';

import { useState } from 'react';
import Image from 'next/image';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SelectChangeEvent } from '@mui/material/Select';
import { TextField, Select, MenuItem, FormControl } from '@mui/material';
import styles from './styles.module.css';

export const CreateSitePageTemplate = () => {
  const [plan, setPlan] = useState('much');
  const [month, setMonth] = useState('');

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) setPlan(newAlignment);
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-full h-full ">
        <section className="w-[530px] mb-10">
          <h1 className="text-6xl font-bold mb-4">Quase lá!</h1>
          <div className="text-lg">
            Preencha os campos abaixo para criar seu site personalizado e
            reviver cada momento especial desses meses vividos juntos&nbsp;
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
        <section>
          <div className="mt-4 flex w-full gap-4">
            <TextField
              size="small"
              label="Nome do casal*"
              placeholder="Exemplo: Miguel e Helena (Não use emoji)"
              variant="outlined"
              sx={{
                width: '300px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#FF4E96',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FF4E96',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF4E96',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#828282',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#828282',
                },
              }}
            />
            <TextField
              size="small"
              label="Link do YouTube da música do casal"
              placeholder="Exemplo: https://www.youtube.com/watch?v=SEC..."
              variant="outlined"
              sx={{
                width: '300px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#FF4E96',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FF4E96',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF4E96',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#828282',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#828282',
                },
              }}
            />
            <FormControl
              size="small"
              sx={{
                width: '145px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#FF4E96',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FF4E96',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF4E96',
                  },
                },
              }}
            >
              <Select
                id="select-month"
                value={month}
                onChange={handleChangeSelect}
                displayEmpty
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF4E96',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF4E96',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF4E96',
                  },
                  color: '#828282',
                }}
              >
                <MenuItem value="">Meses juntos</MenuItem>
                {Array.from({ length: 12 }, (_, index) => (
                  <MenuItem key={index + 1} value={`${index + 1}`}>
                    {index + 1} {index + 1 === 1 ? 'mês' : 'meses'}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full h-full border-2 border-red-600">
        <section>
          <div className="text-2xl mb-4 font-bold">
            Veja como vai ficar seu site&nbsp;
            <span className="inline-block align-middle">
              <Image
                src="/assets/icons/down-finger.svg"
                alt="Loving"
                width={18}
                height={18}
              />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
