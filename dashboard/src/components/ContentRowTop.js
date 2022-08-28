import React from 'react';
import imagenFondo from '../assets/images/1659642339467-img.webp';
import CategoriesInDb from './CategoriesInDb';
import ContentRow from './ContentRow';
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Administración</h1>
					</div>
				
					{/*<!-- Content Row-->*/}
					<ContentRow />
					{/*<!-- End Content Row-->*/}
					
	
					{/*<!-- Content Row Last product in Data Base -->*/}
					<div className="row">
						{/*<!-- Last product in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">último producto agregado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-5 mt-3 mb-5" src={imagenFondo} alt=" "/>
									</div>
									
								</div>
							</div>
						</div>
						{/*<!-- End content row last product in Data Base -->*/}

						{/*<!-- Categories in DB -->*/}
						<CategoriesInDb />

						{/*<!--End Categories In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;