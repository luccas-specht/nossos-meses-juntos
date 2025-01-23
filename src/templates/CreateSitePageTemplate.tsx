'use client';

import { useState } from 'react';
import Image from 'next/image';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SelectChangeEvent } from '@mui/material/Select';
import { TextField, Select, MenuItem, FormControl } from '@mui/material';
import styles from './styles.module.css';
import { DeviceFrameset } from 'react-device-frameset';
import { EditablePreviewTemplate } from './EditablePreviewTemplaye';

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
    <div className="flex-col w-full h-full">
      <div className="flex flex-col w-full h-full ">
        <div className="mb-10">
          <h1 className="text-6xl font-bold mb-4">Quase lá!</h1>
          <div className="text-lg text-[#2f2d5a] font-semibold">
            Preencha os campos abaixo para criar seu site personalizado e
            reviver cada momento especial&nbsp;
            <span className="inline-block align-middle">
              <Image
                src="/assets/icons/loving.svg"
                alt="Loving"
                width={18}
                height={18}
              />
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="to-select-plan"
            className="text-base font-medium text-gray-primary"
          >
            Selecione o seu plano
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
              className="px-3 py-2 max-w-[180px] w-full"
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
              value="poor"
              selected={plan === 'poor'}
              className="px-3 py-2 max-w-[180px] w-full"
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
        </div>
        <div className="w-full flex gap-3 h-max mt-5">
          <div
            className={`w-full max-w-fit bg-white rounded-md border-2 border-solid border-[#FF4E96] ${
              plan === 'much'
                ? 'border-2 shadow-[0_0px_12px_#ff4e6d]'
                : 'bg-[#eeeeee]'
            }`}
          >
            <div className="flex-col w-full max-w-[300px] max-h-max">
              <span className="rounded-tl-[4px] rounded-tr-[4px] bg-[#FF4E96] w-full h-4 p-3 pb-8 block text-white font-bold text-center">
                Recomendado
              </span>
              <div className="w-full px-5 pt-3 text-xl text-[#1f2044] font-bold">
                Plano Muito Amor
              </div>
              <div className="w-full px-5 pt-5 text-[#2E93EE]">
                <span>R$</span>
                <span className="text-5xl font-bold">15,99</span>
              </div>
              <ul className="p-5 text-[#363636]">
                <li className="py-1 flex">
                  <Image
                    className="mr-1"
                    src="/assets/icons/check.svg"
                    alt="check"
                    width={16}
                    height={16}
                  />
                  <span>
                    Você <strong>paga uma vez na vida</strong>
                  </span>
                </li>
                <li className="py-1 flex">
                  <Image
                    className="mr-1"
                    src="/assets/icons/check.svg"
                    alt="check"
                    width={14}
                    height={14}
                  />
                  <span>
                    Disponível <strong>para sempre</strong>
                  </span>
                </li>
                <li className="py-1 flex">
                  <Image
                    className="mr-1"
                    src="/assets/icons/check.svg"
                    alt="check"
                    width={14}
                    height={14}
                  />
                  <span>
                    Até <strong>12 fotos</strong>
                  </span>
                </li>
                <li className="py-1 flex">
                  <Image
                    className="mr-1"
                    src="/assets/icons/check.svg"
                    alt="check"
                    width={14}
                    height={14}
                  />
                  <span>
                    Disponível com <strong>a música do casal</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`w-full max-w-fit p-6 bg-white rounded-md border-1 border-solid border-[#FF4E96] ${
              plan === 'poor'
                ? 'border-2 shadow-[0_0px_6px_#ff4e6d]'
                : 'bg-[#eeeeee]'
            }`}
          >
            pouco
          </div>
        </div>
        {/**
        * 
        *  <div>
          <div className="mt-5 flex w-full gap-4">
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
        </div>
        
        
        <div>
          <div className="mb-10 mt-10">
            <div className="text-base text-[#2f2d5a] font-semibold">
              Adicione suas melhores recordações, enquanto você tem um spoiler
              de como vai ficar seu site
              <span className="inline-block align-middle">
                <Image
                  src="/assets/icons/down-finger.svg"
                  alt="Loving"
                  width={18}
                  height={18}
                />
              </span>
            </div>
          </div>
           <div>
            <DeviceFrameset device="iPhone X" color="black">
              <EditablePreviewTemplate />
            </DeviceFrameset>
          </div> 
        </div>*/}
      </div>
    </div>
  );
};
