import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, MenuList } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


export default function MenuListComposition({ open, onClose, setSelectedCountry }) {
  const anchorRef = React.useRef(null);

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      onClose();
    }
  };

  const handleCountrySelect = (country) => {
    if (country === 'all') {
      setSelectedCountry(null); // Pass null to represent "All" option
    } else {
      setSelectedCountry(country); // Pass the selected country
    }
    onClose();
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={() => onClose(false)}
        style={{ display: 'none' }}
      >
        Hidden Button
      </Button>
      <SwipeableDrawer anchor="left" open={open} onClose={() => onClose(false)} onOpen={() => {}}>
        <div role="presentation" onClick={() => onClose(false)} onKeyDown={handleListKeyDown}>
          <MenuList autoFocusItem={open} id="composition-menu">
            <MenuItem onClick={() => handleCountrySelect('all')}><ListItemIcon>
                <img src="/Flags/planet-earth.png" alt="Earth" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>All</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('ALB')}><ListItemIcon>
                <img src="/Flags/ALB.png" alt="Albania Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Albania</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('AST')}><ListItemIcon>
                <img src="/Flags/AST.png" alt="Australia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Australia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('AUS')}><ListItemIcon>
                <img src="/Flags/AUS.png" alt="Austria Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Austria</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BEL')}><ListItemIcon>
                <img src="/Flags/BEL.png" alt="Belgium Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Belgium</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BRA')}><ListItemIcon>
                <img src="/Flags/BRA.png" alt="Brazil Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Brazil</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BUL')}><ListItemIcon>
                <img src="/Flags/BUL.png" alt="Bulgaria Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Bulgaria</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BRM')}><ListItemIcon>
                <img src="/Flags/BRM.png" alt="Burma Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Burma</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CAN')}><ListItemIcon>
                <img src="/Flags/CAN.png" alt="Canada Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Canada</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CHI')}><ListItemIcon>
                <img src="/Flags/CHI.png" alt="China Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>China</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CRO')}><ListItemIcon>
                <img src="/Flags/CRO.png" alt="Croatia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Croatia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CZE')}><ListItemIcon>
                <img src="/Flags/CZE.png" alt="Czechoslovakia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Czechoslovakia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('DEN')}><ListItemIcon>
                <img src="/Flags/DEN.png" alt="Denmark Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Denmark</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('EGY')}><ListItemIcon>
                <img src="/Flags/EGY.png" alt="Egypt Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Egypt</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('EST')}><ListItemIcon>
                <img src="/Flags/EST.png" alt="Estonia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Estonia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('ETH')}><ListItemIcon>
                <img src="/Flags/ETH.png" alt="Ethiopia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Ethiopia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('FIN')}><ListItemIcon>
                <img src="/Flags/FIN.png" alt="Finland Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Finland</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('FRA')}><ListItemIcon>
              <img src="/Flags/FRA.png" alt="France Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>France</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('GER')}><ListItemIcon>
                <img src="/Flags/GER.png" alt="Germany Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Germany</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('GRE')}><ListItemIcon>
                <img src="/Flags/GRE.png" alt="Greece Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Greece</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('HUN')}><ListItemIcon>
                <img src="/Flags/HUN.png" alt="Hungary Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Hungary</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('RAJ')}><ListItemIcon>
                <img src="/Flags/RAJ.png" alt="India Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>India</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('PER')}><ListItemIcon>
                <img src="/Flags/PER.png" alt="Iran Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Iran</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('IRQ')}><ListItemIcon>
                <img src="/Flags/IRQ.png" alt="Iraq Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Iraq</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('ITA')}><ListItemIcon>
                <img src="/Flags/ITA.png" alt="Italy Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Italy</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('JAP')}><ListItemIcon>
                <img src="/Flags/JAP.png" alt="Japan Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Japan</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('LAT')}><ListItemIcon>
                <img src="/Flags/LAT.png" alt="Latvia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Latvia</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('LIT')}><ListItemIcon>
                <img src="/Flags/LIT.png" alt="Lithuania Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Lithuania</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('LUX')}><ListItemIcon>
                <img src="/Flags/LUX.png" alt="Luxembourg Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Luxembourg</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('MAN')}><ListItemIcon>
                <img src="/Flags/MAN.png" alt="Manchukuo Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Manchukuo</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('MEN')}><ListItemIcon>
                <img src="/Flags/MEN.png" alt="Menjiang Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Mengjiang</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('MEX')}><ListItemIcon>
                <img src="/Flags/MEX.png" alt="Mexico Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Mexico</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('MNT')}><ListItemIcon>
                <img src="/Flags/MNT.png" alt="Montenegro Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Montenegro</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('MON')}><ListItemIcon>
                <img src="/Flags/MON.png" alt="Mongolia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Mongolia</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('NEP')}><ListItemIcon>
                <img src="/Flags/NEP.png" alt="Nepal Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Nepal</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('NOR')}><ListItemIcon>
                <img src="/Flags/NOR.png" alt="Norway Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Norway</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('NZL')}><ListItemIcon>
                <img src="/Flags/NZL.png" alt="New Zealand Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>New Zealand</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('HOL')}><ListItemIcon>
                <img src="/Flags/HOL.png" alt="Netherlands Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Netherlands</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('PHI')}><ListItemIcon>
                <img src="/Flags/PHI.png" alt="Philippines Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Philippines</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('POL')}><ListItemIcon>
                <img src="/Flags/POL.png" alt="Poland Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Poland</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('ROM')}><ListItemIcon>
                <img src="/Flags/ROM.png" alt="Romania Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Romania</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('SAF')}><ListItemIcon>
                <img src="/Flags/SAF.png" alt="South Africa Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>South Africa</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('SIA')}><ListItemIcon>
                <img src="/Flags/SIA.png" alt="Tailand Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Tailand</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('SOV')}><ListItemIcon>
                <img src="/Flags/SOV.png" alt="Soviet Union Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Soviet Union</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('SLO')}><ListItemIcon>
                <img src="/Flags/SLO.png" alt="Slovakia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Slovakia</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('ENG')}><ListItemIcon>
                <img src="/Flags/ENG.png" alt="United Kingdom Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>United Kingdom</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('USA')}><ListItemIcon>
                <img src="/Flags/USA.png" alt="USA Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>USA</MenuItem>
              <MenuItem onClick={() => handleCountrySelect('YUG')}><ListItemIcon>
                <img src="/Flags/YUG.png" alt="Yugoslavia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Yugoslavia</MenuItem>


          </MenuList>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
