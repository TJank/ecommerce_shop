import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import PageItem from 'react-bootstrap/PageItem'


function Paginate({pages, page, keyword='', isAdmin=false}) {
    var path = "/"
    if (isAdmin) {
        path = "/admin/productlist/"
    } else {
        path = "/"
    }
    return (
        pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <LinkContainer
                        key={x+1}
                        to={{
                            pathname: path,
                            search: `?keyword=${keyword}&page=${x+1}`
                    }}
                    >
                        <PageItem active={x + 1 === page}>{x + 1}</PageItem>
                    </LinkContainer>
                ))}
            </Pagination>
        )
    )
}

export default Paginate