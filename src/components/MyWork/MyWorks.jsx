import React from 'react';
import Container from '../Layout/Container';
import works from '../../data/works';
import WorkItem from './WorkItem';

const MyWorks = () => {
  return (
    <div id="mywork" className='bg-secondary p-[100px] '>
        <Container>
        <h1 className='text-[#FEFEFE] text-[50px] text-center font-bold pb-20'>My <span className='text-lightyellow text-[50px] font-semibold'>Works</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{works.map(work => (
					<WorkItem
						key={work.title}
						imgUrl={work.imgUrl}
						title={work.title}
						tech={work.tech}
						workUrl={work.workUrl}
					/>
				))}
			</div>
        </Container>
    </div>
  )
}

export default MyWorks