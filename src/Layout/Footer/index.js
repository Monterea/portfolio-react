import { FooterBody, FooterContainer, Line, Pfooter, Hfooter, NewTabLink } from "./footerStyles";
import Github from '../../Pictures/Footer/github.png';

export default function Footer () {
	return (	
		<FooterContainer name="footer container">
			<FooterBody name="footer body">
				<Line name="conact adress">
					<Hfooter>Ing. Michaela Stuchlíková</Hfooter>
					<Pfooter>Jurkovičova 1551/4</Pfooter>
					<Pfooter>Karviná - Nové město</Pfooter>
					<Pfooter>735 06</Pfooter>
				</Line>
				<Line>
					<Hfooter>e-mail:</Hfooter>
					<Pfooter>michaelastuchlikova9@gmail.com</Pfooter>
					<Hfooter>tel.:</Hfooter>
					<Pfooter>704 586 276</Pfooter>
				</Line>
				<Line>
					{/* <NewTabLink
						href='https://github.com/Monterea'
						target="_blank"	
					>
						<img src="${Github}"></img>
					</NewTabLink>
					<NewTabLink
						href='https://www.linkedin.com/in/michaela-stuchlikova999/'
						target="_blank"
						name="linkedin"
					>
						LinkedIn
					</NewTabLink> */}
				</Line>
			</FooterBody>
         
		</FooterContainer>
	);
};