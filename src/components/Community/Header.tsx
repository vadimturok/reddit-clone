import React, {FC} from 'react';
import {Community} from "../../atoms/communitiesAtom";
import {Box, Button, Flex, Icon, Image, Text} from "@chakra-ui/react";
import {FaReddit} from "react-icons/fa";
import useCommunityData from "../../hooks/useCommunityData";

type HeaderProps = {
    communityData: Community
}

const Header: FC<HeaderProps> = ({communityData}) => {
    const {communityStateValue, onJoinOrLeaveCommunity, loading} = useCommunityData()
    const isJoined = !!communityStateValue.mySnippets.find(item => item.communityId === communityData.id)
    return (
        <Flex
            direction={'column'}
            width={'100%'}
            height={'146px'}
        >
            <Box height={'50%'} bg={'blue.500'}/>
            <Flex
                justify={'center'}
                bg={'white'}
                flexGrow={1}
            >
                <Flex
                    width={'95%'}
                    maxWidth={'860px'}
                >
                    {communityStateValue.currentCommunity?.imageURL ? (
                        <Image
                            borderRadius={'full'}
                            boxSize={'66px'}
                            position={'relative'}
                            alt={'Community Logo'}
                            top={-3}
                            color={'blue.500'}
                            border={'4px solid white'}
                            src={communityStateValue.currentCommunity.imageURL}
                        />
                    ) : (
                        <Icon
                            as={FaReddit}
                            fontSize={64}
                            position={'relative'}
                            top={-3}
                            color={'blue.500'}
                            border={'4px solid white'}
                            borderRadius={'50%'}
                        />
                    )}
                    <Flex padding={'10px 16px'}>
                        <Flex direction={'column'} mr={6}>
                            <Text fontWeight={800} fontSize={'16pt'}>{communityData.id}</Text>
                            <Text fontWeight={600} fontSize={'10pt'} color={'gray.400'}>r/{communityData.id}</Text>
                        </Flex>
                        <Button isLoading={loading} height={'30px'} pr={6} pl={6} onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)} variant={isJoined ? 'outline' : 'solid'}>{isJoined ? 'Joined' : 'Join'}</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Header;