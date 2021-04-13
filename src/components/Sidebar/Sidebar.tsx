import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle} from 'framer-motion';
import { useDimensions } from '../referencia/dimencions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sideBar = {
	open: (height = 1000) => ({		
		width: 300,
		height: '100vh',
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,	
		transition: {			
			delay: 0.2,
			type: 'spring',
			stiffness: 20,
			restDelta: 2,			
			width: {
				velocity: 0.1
			},
			height: {
				velocity: 0.1
			}
		}
	}),
	closed: {
		width: 75,
		height: 75,
		clipPath: 'circle( 30px at 40px 40px)',	

		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,			
			width: {
				velocity: 0.03,
				delay: 1
			},
			height: {
				velocity: 0.03,
				delay: 1
			}
		}
	}
};

const navSidebar = {
	open: {
		width: 300,
		height: '100vh',
	},
	close: {
		width: 75,
		height: 75,
	}
};

const Sidebar = () => {

	const [ isOpen, toggleOpen ] = useCycle( false, true );
	const containerRef = useRef( null );
	const { height } = useDimensions( containerRef );

	return (
		<motion.nav			
			animate={isOpen ? 'open' : 'closed'}
			variants={navSidebar}

			custom={height}
			ref={containerRef}
		>
			<motion.div
				className='background'
				variants={sideBar}
			/>
			<Navigation />
			<MenuToggle toggle={() => toggleOpen()} />
            
		</motion.nav>
	);
};
export default Sidebar;