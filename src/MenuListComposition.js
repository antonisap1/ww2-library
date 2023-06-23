import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, MenuList } from '@mui/material';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
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
                <img src="/planet-earth.png" alt="Earth" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>All</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('ALB')}><ListItemIcon>
                <img src="/ALB.png" alt="Albania Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Albania</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('AST')}><ListItemIcon>
                <img src="/AST.png" alt="Australia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Australia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('AUS')}><ListItemIcon>
                <img src="/AUS.png" alt="Austria Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Austria</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BEL')}><ListItemIcon>
                <img src="/BEL.png" alt="Belgium Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Belgium</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BRA')}><ListItemIcon>
                <img src="/BRA.png" alt="Brazil Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Brazil</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BUL')}><ListItemIcon>
                <img src="/BUL.png" alt="Bulgaria Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Bulgaria</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('BRM')}><ListItemIcon>
                <img src="/BRM.png" alt="Burma Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Burma</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CAN')}><ListItemIcon>
                <img src="/CAN.png" alt="Canada Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Canada</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CHI')}><ListItemIcon>
                <img src="/CHI.png" alt="China Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>China</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CRO')}><ListItemIcon>
                <img src="/CRO.png" alt="Croatia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Croatia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('CZE')}><ListItemIcon>
                <img src="/CZE.png" alt="Czechoslovakia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Czechoslovakia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('DEN')}><ListItemIcon>
                <img src="/DEN.png" alt="Denmark Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Denmark</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('EGY')}><ListItemIcon>
                <img src="/EGY.png" alt="Egypt Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Egypt</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('EST')}><ListItemIcon>
                <img src="/EST.png" alt="Estonia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Estonia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('ETH')}><ListItemIcon>
                <img src="/ETH.png" alt="Ethiopia Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Ethiopia</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('FIN')}><ListItemIcon>
                <img src="/FIN.png" alt="Finland Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Finland</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('FRA')}><ListItemIcon>
              <img src="/FRA.png" alt="France Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>France</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('GER')}><ListItemIcon>
                <img src="/GER.png" alt="Germany Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Germany</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('GRE')}><ListItemIcon>
                <img src="/GRE.png" alt="Greece Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Greece</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('HUN')}><ListItemIcon>
                <img src="/HUN.png" alt="Hungary Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Hungary</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('RAJ')}><ListItemIcon>
                <img src="/RAJ.png" alt="India Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>India</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('PER')}><ListItemIcon>
                <img src="/PER.png" alt="Iran Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Iran</MenuItem>
            <MenuItem onClick={() => handleCountrySelect('IRQ')}><ListItemIcon>
                <img src="/IRQ.png" alt="Iraq Flag" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>Iraq</MenuItem>


          </MenuList>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
