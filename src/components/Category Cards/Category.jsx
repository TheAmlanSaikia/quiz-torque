import "./Category.css";    

const Category=({ id, cateoryName, bgcolor,image, path })=>{

    return (
         <>
            <main
            key={id}
            style={{ backgroundColor: bgcolor }}
            className='category-card card-shadow mr-1'
            >

            {/* // onClick={() => */}
            {/* //   dispatch({ type: "ADD_CATEGORIES", payload: item.categoryName }) */}
            {/* // }> */}
            {/* <Link to='/products'> */}
              <section className='category-image-container relative'>
                <img
                  src={image}
                  alt='Category'
                  className='category-image absolute'
                />
              </section>
              <h3 className='ml-1 category-text-color'>Play</h3>
              <h3 className='ml-1 pb-1 category-text-color'>
              {cateoryName}
              </h3>
             {/* </Link> */}
             {/* {categoriesdata && console.log(categoriesdata)} */}
          </main>

         </>

    )
}


export { Category };