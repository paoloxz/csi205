const AppFooter = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary py-4'>
      <div className='text-center text-white fs-6'>
        <p className='mb-2'>
          มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ
          <br />
          สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
        </p>

        <div className='d-flex justify-content-center align-items-center gap-4 mt-2'>
          
          <a
            href='https://www.facebook.com/pattsorn.penpornlertchai/about?locale=th_TH'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-decoration-none d-flex align-items-center gap-1'
          >
            <i className='bi bi-facebook fs-5'></i>
          </a>

          <a
            href='https://www.instagram.com/txdivm'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-decoration-none d-flex align-items-center gap-1'
          >
            <i className='bi bi-instagram fs-5'></i>
          </a>

          <a
            href='https://x.com/912624gg'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-decoration-none d-flex align-items-center gap-1'
          >
            <i className='bi bi-twitter-x fs-5'></i>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default AppFooter