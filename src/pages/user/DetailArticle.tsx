import React, { useEffect, useState } from 'react'
import NavbarUser from '../../components/NavbarUser'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import Footer from '../../components/Footer';
import dataArticle from '../../mocks/dataArticle.json'
import IArticle from '../../interface/IArticle';

interface Props {
    logo: string
}

const DetailArticle: React.FC<Props> = ({ logo }) => {
    const {id} = useParams()
    const [article, setArticle] = useState<IArticle[]>(dataArticle)    
    
    useEffect(() => {
        const filteredArticle = article.filter(art => art.id == id)
        setArticle(filteredArticle)
    }, [id])
    
    const [currArticle] = article
    
    return (
        <>
            <NavbarUser logo={logo} />

            <div className='px-24'>
                <div className="bg-white py-10 relative">
                    <Link to={'/'} className='absolute left-10 flex items-center gap-3 text-[20px]'><FaArrowLeft /> Beranda</Link>
                    <p className='text-center text-[20px]'>Berita hari ini</p>
                    <div className='text-center mt-10'>
                        <h1 className='font-bold text-[#5E5A00] text-4xl'>{currArticle.title}</h1>
                        <h2 className='text-2xl'>{currArticle.author}</h2>
                        <h2 className='text-3xl'>{currArticle.timestamp}</h2>
                    </div>

                    <div className='px-12 mt-10'>
                        <img src={currArticle.image} alt="" />
                        <div className='text-justify space-y-4 mt-5'>
                            <p className='text-justify'>
                                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti. Sed interdum, lacus ac ultrices facilisis, ligula enim pellentesque elit, vel varius nisi odio at purus. Sed suscipit purus quis tortor posuere, in varius est euismod. Mauris aliquam urna non elit faucibus, eu fermentum turpis mattis. Quisque vel nisl vitae sapien congue dapibus. Vivamus auctor, velit ut condimentum bibendum, purus lacus scelerisque ligula, nec gravida arcu velit id libero. In hac habitasse platea dictumst.
                            </p>
                            <p>
                                Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non efficitur sapien scelerisque et. Maecenas facilisis eros id enim tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada mi, vitae convallis libero. In hac habitasse platea dictumst. Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer vitae ex ac libero fermentum volutpat ut vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt varius vel sit amet nunc. Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit. Integer euismod, purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.
                            </p>
                            <p>
                                Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel turpis eu purus fermentum tincidunt a vel elit. Phasellus efficitur sapien vel efficitur rhoncus. Integer vel risus ut neque elementum gravida. Morbi rhoncus, ligula nec posuere tristique, ligula lacus dapibus urna, a lacinia sem metus id libero. Suspendisse luctus ligula eu mauris auctor, non semper elit feugiat.
                            </p>
                            <p>
                                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti.
                            </p>
                        </div>
                    </div>
                </div>
            </div >

            <Footer logo={logo}/>
        </>
    )


}

export default DetailArticle