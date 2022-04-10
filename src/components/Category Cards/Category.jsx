import "./Category.css";    

const Category=()=>{

    return (
         <>
            <main
            // key={item._id}
            style={{ backgroundColor: "blue" }}
            className='category-card card-shadow mr-1'
            >

            {/* // onClick={() => */}
            {/* //   dispatch({ type: "ADD_CATEGORIES", payload: item.categoryName }) */}
            {/* // }> */}
            {/* <Link to='/products'> */}
              <section className='category-image-container'>
                {/* <img
                  src={item.image}
                  alt='Category'
                  className='category-image'
                /> */}
              </section>
              <h5 className='ml-1 category-text-color'>Shop</h5>
              <h5 className='ml-1 pb-1 category-text-color'>
                Card Box
              </h5>
             {/* </Link> */}
             {/* {categoriesdata && console.log(categoriesdata)} */}
          </main>

         </>

    )
}


export { Category };